export function FooterSection() {
  return (
    <footer className="theme-obsidian border-t border-border bg-surface py-7">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-sm text-text-muted sm:px-8 md:flex-row">
        <p>© {new Date().getFullYear()} Code Baxh. All rights reserved.</p>
        <p>Built with care</p>
      </div>
    </footer>
  );
}
