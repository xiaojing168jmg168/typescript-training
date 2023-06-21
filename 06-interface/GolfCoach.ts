import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyworkout(): string {
        return "Hit 100 balls at the golf range."
    }
    
}