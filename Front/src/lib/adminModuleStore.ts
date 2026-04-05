import { useSyncExternalStore } from 'react';

import type {
  AdminModuleState,
  AdminUniversity,
  PendingCredential,
  RegisterUniversityFormValues,
  UniversityStatus,
} from '@/content/types';
import { patientRegisterCatalogDataSource } from '@/lib/patientRegisterCatalogDataSource';

type AdminModuleActions = {
  deleteCredential: (credentialId: string) => void;
  registerUniversity: (values: RegisterUniversityFormValues) => {
    credentialId: string;
    universityId: string;
  };
  resendCredential: (credentialId: string) => void;
  sendCredential: (credentialId: string) => void;
  toggleUniversityStatus: (universityId: string) => UniversityStatus | null;
};

const listeners = new Set<() => void>();

function createInitialState(): AdminModuleState {
  const universities: AdminUniversity[] = [
    {
      adminEmail: 'ana.velasquez@clinicadelnorte.edu.co',
      adminFirstName: 'Ana Lucia',
      adminLastName: 'Velasquez',
      adminPhone: '3005550180',
      createdAt: '2026-04-01T10:00:00.000Z',
      credentialId: null,
      id: 'uni-1',
      mainCity: 'Bogota',
      mainCityId: 'city-bogota',
      mainLocality: 'Usaquen',
      mainLocalityId: 'locality-bogota-usaquen',
      name: 'Universidad Clinica del Norte',
      status: 'active',
    },
    {
      adminEmail: 'diego.cardenas@institutoandino.edu.co',
      adminFirstName: 'Diego',
      adminLastName: 'Cardenas',
      adminPhone: '3005550172',
      createdAt: '2026-03-28T15:00:00.000Z',
      credentialId: null,
      id: 'uni-2',
      mainCity: 'Medellin',
      mainCityId: 'city-medellin',
      mainLocality: 'Laureles',
      mainLocalityId: 'locality-medellin-laureles',
      name: 'Instituto Andino de Odontologia',
      status: 'inactive',
    },
    {
      adminEmail: 'sofia.rojas@universidadpacifico.edu.co',
      adminFirstName: 'Sofia',
      adminLastName: 'Rojas',
      adminPhone: '3005550195',
      createdAt: '2026-04-03T09:30:00.000Z',
      credentialId: 'cred-1',
      id: 'uni-3',
      mainCity: 'Cali',
      mainCityId: 'city-cali',
      mainLocality: 'Comuna 17',
      mainLocalityId: 'locality-cali-comuna-17',
      name: 'Universidad del Pacifico Dental',
      status: 'pending',
    },
    {
      adminEmail: 'mateo.diaz@corporacionoral.edu.co',
      adminFirstName: 'Mateo',
      adminLastName: 'Diaz',
      adminPhone: null,
      createdAt: '2026-04-02T12:45:00.000Z',
      credentialId: 'cred-2',
      id: 'uni-4',
      mainCity: 'Barranquilla',
      mainCityId: 'city-barranquilla',
      mainLocality: 'Riomar',
      mainLocalityId: 'locality-barranquilla-riomar',
      name: 'Corporacion Oral del Caribe',
      status: 'pending',
    },
  ];

  const credentials: PendingCredential[] = [
    {
      deliveryStatus: 'generated',
      id: 'cred-1',
      lastSentAt: null,
      sentCount: 0,
      universityId: 'uni-3',
    },
    {
      deliveryStatus: 'sent',
      id: 'cred-2',
      lastSentAt: '2026-04-03T16:05:00.000Z',
      sentCount: 1,
      universityId: 'uni-4',
    },
  ];

  return {
    credentials,
    universities,
  };
}

let state = createInitialState();
let nextUniversitySequence = state.universities.length + 1;
let nextCredentialSequence = state.credentials.length + 1;

function emitChange() {
  listeners.forEach((listener) => {
    listener();
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return state;
}

function updateState(nextState: AdminModuleState) {
  state = nextState;
  emitChange();
}

function normalizeText(value: string) {
  return value.trim();
}

function normalizeOptionalText(value: string) {
  const trimmedValue = normalizeText(value);
  return trimmedValue.length > 0 ? trimmedValue : null;
}

function getCityById(cityId: string) {
  const cities = patientRegisterCatalogDataSource.getCities();

  if (!Array.isArray(cities)) {
    return null;
  }

  return cities.find((city) => city.id === cityId) ?? null;
}

function getLocalityById(cityId: string, localityId: string) {
  const localities = patientRegisterCatalogDataSource.getLocalitiesByCity(cityId);

  if (!Array.isArray(localities)) {
    return null;
  }

  return localities.find((locality) => locality.id === localityId) ?? null;
}

function markCredentialAsSent(credentialId: string) {
  updateState({
    ...state,
    credentials: state.credentials.map((credential) =>
      credential.id === credentialId
        ? {
            ...credential,
            deliveryStatus: 'sent',
            lastSentAt: new Date().toISOString(),
            sentCount: credential.sentCount + 1,
          }
        : credential,
    ),
  });
}

function registerUniversity(values: RegisterUniversityFormValues) {
  const universityId = `uni-${nextUniversitySequence}`;
  const credentialId = `cred-${nextCredentialSequence}`;
  const city = getCityById(values.cityId);
  const locality = getLocalityById(values.cityId, values.mainLocalityId);

  nextUniversitySequence += 1;
  nextCredentialSequence += 1;

  const nextUniversity: AdminUniversity = {
    adminEmail: normalizeText(values.adminEmail).toLowerCase(),
    adminFirstName: normalizeText(values.adminFirstName),
    adminLastName: normalizeText(values.adminLastName),
    adminPhone: normalizeOptionalText(values.adminPhone),
    createdAt: new Date().toISOString(),
    credentialId,
    id: universityId,
    mainCity: city?.label ?? '',
    mainCityId: values.cityId,
    mainLocality: locality?.label ?? '',
    mainLocalityId: values.mainLocalityId,
    name: normalizeText(values.name),
    status: 'pending',
  };

  const nextCredential: PendingCredential = {
    deliveryStatus: 'generated',
    id: credentialId,
    lastSentAt: null,
    sentCount: 0,
    universityId,
  };

  updateState({
    credentials: [nextCredential, ...state.credentials],
    universities: [nextUniversity, ...state.universities],
  });

  return {
    credentialId,
    universityId,
  };
}

function toggleUniversityStatus(universityId: string) {
  const currentUniversity = state.universities.find((university) => university.id === universityId);

  if (!currentUniversity || currentUniversity.status === 'pending') {
    return null;
  }

  const nextStatus: UniversityStatus =
    currentUniversity.status === 'active' ? 'inactive' : 'active';

  updateState({
    ...state,
    universities: state.universities.map((university) =>
      university.id === universityId ? { ...university, status: nextStatus } : university,
    ),
  });

  return nextStatus;
}

function sendCredential(credentialId: string) {
  markCredentialAsSent(credentialId);
}

function resendCredential(credentialId: string) {
  markCredentialAsSent(credentialId);
}

function deleteCredential(credentialId: string) {
  const currentCredential = state.credentials.find((credential) => credential.id === credentialId);

  if (!currentCredential) {
    return;
  }

  updateState({
    credentials: state.credentials.filter((credential) => credential.id !== credentialId),
    universities: state.universities.filter(
      (university) =>
        !(
          university.id === currentCredential.universityId &&
          university.status === 'pending' &&
          university.credentialId === credentialId
        ),
    ),
  });
}

export function resetAdminModuleState() {
  state = createInitialState();
  nextUniversitySequence = state.universities.length + 1;
  nextCredentialSequence = state.credentials.length + 1;
  emitChange();
}

export function useAdminModuleStore() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const actions: AdminModuleActions = {
    deleteCredential,
    registerUniversity,
    resendCredential,
    sendCredential,
    toggleUniversityStatus,
  };

  return {
    ...snapshot,
    ...actions,
  };
}
