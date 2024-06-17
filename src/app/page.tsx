import {HeroForm} from '@/components/form'
import {Icons} from '@/components/icons'
import {Button} from '@/components/ui/button'

const Home = () => {
  return (
    <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Modelo de partida do next.js
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        Um modelo de partida Next.js, repleto de recursos como o TypeScript,
        Tailwind CSS, Next-Auth, Eslint, Stripe, Ferramentas de teste e muito
        mais. Jumpe seu projeto com eficiência e estilo.
      </p>
      <div className="mt-1">
        <HeroForm />
      </div>
      <div className="mt-2 flex gap-4">
        <Button asChild>
          <a
            href="https://github.com/wandersonchaves/next-starter/blob/main/README.md#getting-started"
            target="_blank"
          >
            Get Started
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/wandersonchaves/next-starter"
            target="_blank"
          >
            <Icons.github className="mr-2 size-4" /> Github
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Home
