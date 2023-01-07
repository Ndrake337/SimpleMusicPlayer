import Player from "./components/Players/ExtendedPlayer";
import "./index.css";

export default function App() {
  return (
    <div className="flex flex-row items-center justify-center h-screen gap-8">
      <Player size="Full-Size" />
      <div className="flex flex-col gap-8">
        <Player size="Small-Size" />
        <Player size="Compact" />
      </div>
    </div>
  );
}
