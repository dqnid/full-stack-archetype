import { SignInWidget } from "@/modules/auth/components/sign-in.widget";
import ThemeSwitcher from "@/modules/common/theme-switcher";

export default function Home() {
  return (
    <main>
      Main page
      <ThemeSwitcher />
      <SignInWidget />
    </main>
  );
}
