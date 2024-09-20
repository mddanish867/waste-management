import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import NotificationPage from "./Notification";
import PickupHistory from "./PickupHistory";
import ServiceBooking from "./ServiceBooking";
import ServiceAndPolicy from "./ServiceAndPolicy";
import Pricing from "./Pricing";
import WastePickup from "./WastePickup";
import FAQ from "./FAQItem";
import UserAnalyticDashboard from "./UserAnalyticDashboard";
import AdminDashboard from "./AdminDashboard";
export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <LandingPage/>
      <NotificationPage/>
      <PickupHistory/>
      <ServiceBooking/>
      <ServiceAndPolicy/>
      <Pricing/>
      <WastePickup/>
      <FAQ/>
      <UserAnalyticDashboard/>
      <AdminDashboard/>
      <Footer />
    </>
  );
}
