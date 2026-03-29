import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const commonToast = (icon: 'success' | 'error' | 'warning', title: string) => {
  return MySwal.fire({
    toast: true,
    position: 'top-end',
    icon,
    title,
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    background: icon === 'success' ? '#ECFDF5' : icon === 'error' ? '#FEE2E2' : '#FEF9C3',
    color: icon === 'success' ? '#065F46' : icon === 'error' ? '#B91C1C' : '#92400E',
    customClass: {
      popup: 'rounded-xl border p-4',
    },
  });
};

export const showSuccess = (message: string) => commonToast('success', message);
export const showError = (message: string) => commonToast('error', message);
export const showWarning = (message: string) => commonToast('warning', message);

export const confirmCareerNote = async (note: string) => {
  return MySwal.fire({
    title: 'Important Application Note',
    html: `<p class='text-base leading-relaxed text-left'>${note}</p>`,
    icon: 'info',
    iconColor: '#2563EB',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3B82F6',
    cancelButtonColor: '#6B7280',
    background: '#ffffff',
    customClass: {
      popup: 'rounded-xl p-6',
    },
  });
};
