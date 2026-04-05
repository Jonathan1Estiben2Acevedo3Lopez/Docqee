import { Outlet } from 'react-router-dom';

import { AdminShell } from '@/components/admin/AdminShell';

export function AdminLayout() {
  return (
    <AdminShell>
      <Outlet />
    </AdminShell>
  );
}
