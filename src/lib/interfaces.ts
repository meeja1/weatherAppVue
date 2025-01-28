export interface BeforeInstallPromptType extends Event {
  prompt: () => void;
  userChoice: Promise<{
    outcome: string;
  }>;
}
