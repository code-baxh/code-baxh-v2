/**
 * Renders one or more JSON-LD objects as a <script> tag. Server-safe.
 * Usage: <JsonLd data={organizationSchema()} /> or pass an array.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema is built from trusted internal config, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
