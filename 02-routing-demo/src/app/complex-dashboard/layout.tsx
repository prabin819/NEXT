// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <div>{children}</div> {/*content from the page.tsx */}
//       <UserAnalytics /> {/*component for user analytics*/}
//       <RevenueMetrics /> {/*component for user RevenueMetrics*/}
//       <Notifications /> {/*component for user Notifications*/}
//     </>
//   );
// }

export default function DashboardLayout({
  children,
  users,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div>
        <h1>{children}</h1>
        {/* equivalent to => complex-dashboard/@children/page.tsx */}
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </>
  );
}
