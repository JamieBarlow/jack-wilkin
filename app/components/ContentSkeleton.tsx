export default function ContentSkeleton() {
  return (
    <div className="w-full">
      <div className="text-base-100 px-6 py-8 min-h-screen bg-secondary">
        <div className="flex flex-col gap-4 container-padded">
          <div className="skeleton h-[40vh] w-full bg-base-300/40"></div>
          <div className="skeleton h-4 w-28 bg-base-300/40"></div>
          <div className="skeleton h-4 w-4/6 bg-base-300/40"></div>
          <div className="skeleton h-4 w-5/6 bg-base-300/40"></div>
        </div>
      </div>
    </div>
  );
}
