export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-4 md:p-8">
        <div>
          <section className="bg-background rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Generate a New Post</h2>
            <form className="grid gap-4">
              <div className="grid gap-1">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  placeholder="Include description, date and place"
                  rows={5}
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <button type="submit" className="bg-black text-white rounded-md px-4 py-2 hover:bg-primary-hover">
                Generate Post
              </button>
            </form>
          </section>
        </div>
        <div className="bg-background rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Additional Features</h2>
          <div className="grid gap-4">
            <div className="bg-background rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Post Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Track the performance of your generated posts with detailed analytics.
              </p>
              <button className="bg-black text-white rounded-md px-4 py-2 hover:bg-primary-hover">
                View Analytics
              </button>
            </div>
            <div className="bg-background rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Post Templates</h3>
              <p className="text-muted-foreground mb-4">
                Use pre-designed templates to quickly create professional-looking posts.
              </p>
              <button className="bg-black text-white rounded-md px-4 py-2 hover:bg-primary-hover">
                Explore Templates
              </button>
            </div>
            <div className="bg-background rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Scheduling</h3>
              <p className="text-muted-foreground mb-4">
                Schedule your posts to be published at the optimal time for maximum engagement.
              </p>
              <button className="bg-black text-white rounded-md px-4 py-2 hover:bg-primary-hover">
                Schedule Post
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function CalendarIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}