import { GameStats } from "../app/components/GameStats";
// import LiveChat from "./components/LiveChat";

export default function HomePage() {
  return (
    <div className="container mx-auto sm:p-5 p-2">
      <GameStats />
      {/* <LiveChat /> */}
    </div>
  );
}
