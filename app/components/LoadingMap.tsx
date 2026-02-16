interface LoadingMapProps {
  height?: string;
}

export default function LoadingMapCard({ height }: LoadingMapProps) {
  return <div className={`skeleton w-full ${height} bg-base-200`} />;
}
