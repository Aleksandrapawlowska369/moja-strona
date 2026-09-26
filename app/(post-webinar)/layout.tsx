import { PostWebinarFooter } from "@/components/webinar/PostWebinarFooter";

export default function PostWebinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <PostWebinarFooter />
    </>
  );
}
