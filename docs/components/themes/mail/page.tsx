import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export default function MailPage() {
  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="flex-col hidden dark:bg-black bg-slate-300 border-[001px]  rounded-xl md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={[20, 32, 48]}
          defaultCollapsed={false}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
