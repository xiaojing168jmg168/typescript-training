import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyworkout(): string {
        return "Practice your spin bowling technique."
    }

}