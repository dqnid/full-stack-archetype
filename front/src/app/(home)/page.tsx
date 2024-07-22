import { SignInWidget } from "@/modules/auth/components/sign-in/sign-in.widget";
import ThemeSwitcher from "@/modules/common/theme-switcher";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      Main page
      <ThemeSwitcher />
      <SignInWidget />
    </main>
  );
}
