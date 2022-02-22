import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        let duration!: string
        switch(value){
            case 1: 
                duration = '30 minutes'
                break
            case 2: 
                duration = '1 hour'
                break
            case 3: 
                duration = '6 hour'
                break
            case 4: 
                duration = '12 hour'
                break
            default:
                duration = value.toString()
                break
        }
        return duration
    }
    
}