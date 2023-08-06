import TeespringEmbed from "@/components/(embeds)/TeespringEmbed";
import TeespringEmbed2 from "@/components/(embeds)/TeespringEmbed2";
import TeespringEmbed3 from "@/components/(embeds)/TeespringEmbed3";

export default function Merch() {
  return (
    <main>
      <div className="container flex justify-center">
        <div className="hidden lg:block">
          <TeespringEmbed />
        </div>
        <div className="hidden md:block lg:hidden">
          <TeespringEmbed2 />
        </div>
        <div className="block md:hidden">
          <TeespringEmbed3 />
        </div>
      </div>
    </main>
  );
}
