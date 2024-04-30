import { Button } from '@repo/ui';

export default function Page(): JSX.Element {
  return (
    <main className="bg-slate-900 flex items-center justify-center h-screen text-4xl text-cyan-50">
      <Button variant={'destructive'}>Shadcn-ui Button</Button>
    </main>
  );
}
