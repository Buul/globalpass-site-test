import { content } from "../../content";
import Section from "../../components/section/section";
import { container } from "../../lib/ui";

const { table } = content.impact;

const rowGrid =
  "grid grid-cols-[1.2fr_1fr_1fr] px-6 py-7 max-md:grid-cols-1 max-md:gap-4 max-md:px-4 max-md:py-5 max-sm:gap-3 max-sm:p-4";

export default function Impact() {
  return (
    <Section id="impacto" heading={content.impact}>
      <div className={container}>
        <table className="w-full overflow-hidden rounded-3xl border border-line border-collapse bg-card">
          <caption className="sr-only">{table.caption}</caption>
          <thead className="block">
            <tr
              className={`${rowGrid} border-b-2 border-black/10 bg-linear-to-br from-primary to-accent text-[0.95rem] font-bold tracking-tight text-white max-md:gap-2 max-md:text-[0.9rem] max-sm:text-[0.85rem]`}
            >
              <th scope="col" className="flex items-center text-left font-bold">
                {table.process}
              </th>
              <th scope="col" className="flex items-center text-left font-bold">
                {table.before}
              </th>
              <th scope="col" className="flex items-center text-left font-bold">
                {table.after}
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col">
            {table.rows.map((row) => (
              <tr
                key={row.process}
                className={`${rowGrid} items-center border-b border-line transition-all duration-300 last:border-b-0 hover:bg-primary/4`}
              >
                <th
                  scope="row"
                  className="text-left text-base font-semibold tracking-tight text-foreground max-md:text-[0.95rem] max-sm:text-[0.9rem]"
                >
                  {row.process}
                </th>
                <td className="flex items-start gap-3 max-md:gap-2">
                  <span
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center text-[1.1rem] font-bold text-red-500 max-sm:size-6 max-sm:text-base"
                    aria-hidden="true"
                  >
                    ❌
                  </span>
                  <span className="text-[0.95rem] leading-normal text-muted max-md:text-[0.9rem] max-sm:text-[0.85rem]">
                    {row.before}
                  </span>
                </td>
                <td className="flex items-start gap-3 max-md:gap-2">
                  <span
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center text-[1.1rem] font-extrabold text-emerald-500 max-sm:size-6 max-sm:text-base"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-[0.95rem] leading-normal text-muted max-md:text-[0.9rem] max-sm:text-[0.85rem]">
                    {row.after}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
