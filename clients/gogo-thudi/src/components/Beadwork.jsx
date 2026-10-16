// A thin band of repeating triangles and dots, inspired by beadwork borders.
const colours = ['#C8963E', '#B5532F', '#FAF5EC', '#3D3060']

export default function Beadwork({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height="14" preserveAspectRatio="none">
        <defs>
          <pattern id="beads" width="56" height="14" patternUnits="userSpaceOnUse">
            {colours.map((c, i) => (
              <g key={c}>
                <polygon points={`${i * 14},14 ${i * 14 + 7},0 ${i * 14 + 14},14`} fill={c} />
                <circle cx={i * 14 + 7} cy="10" r="1.6" fill={i === 2 ? '#1E1633' : '#FAF5EC'} />
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="14" fill="url(#beads)" />
      </svg>
    </div>
  )
}
