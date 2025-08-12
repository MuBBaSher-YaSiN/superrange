import Wrapper from "@/layouts/Wrapper";
import HomeOne from "@/components/homes/home";

export const metadata = {
  title: "Car Repair & Auto Services Next js Template",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function Page() {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
}
