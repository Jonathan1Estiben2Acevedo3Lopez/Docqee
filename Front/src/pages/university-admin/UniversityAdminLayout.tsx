import { Outlet } from 'react-router-dom';

import { AdminShell } from '@/components/admin/AdminShell';
import { universityAdminContent } from '@/content/universityAdminContent';

export function UniversityAdminLayout() {
  return (
    <AdminShell content={universityAdminContent.shell}>
      <Outlet />
    </AdminShell>
  );
}
