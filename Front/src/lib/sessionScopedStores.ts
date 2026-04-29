import { resetAdminModuleState } from '@/lib/adminModuleStore';
import { resetPatientModuleState } from '@/lib/patientModuleStore';
import { resetStudentModuleState } from '@/lib/studentModuleStore';
import { resetUniversityAdminModuleState } from '@/lib/universityAdminModuleStore';

export function resetSessionScopedStores() {
  resetAdminModuleState();
  resetPatientModuleState();
  resetStudentModuleState();
  resetUniversityAdminModuleState();
}
