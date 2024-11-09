import GameStats from "../components/GameStats";
import ListElements from "../components/ListElements";

export default function HomePage() {
    return (
        <div className="container mx-auto p-2 flex gap-5 w-full items-start">
            <GameStats />
            <ListElements />
        </div>
    );
}
