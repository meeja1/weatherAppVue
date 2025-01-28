import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BeforeInstallPromptType } from './interfaces';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function appInstall() {

  let deferredPrompt: BeforeInstallPromptType | null;

  const installButton = <HTMLButtonElement>document.querySelector("#buttonInstall");

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptType;
  });

  installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    }
  });
}
