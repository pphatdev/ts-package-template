export class TSTemplate {

    constructor() {
        this.helloTSTemplate()
    }

    /**
     * Hello world
     * @return  string 
     * */ 
    helloTSTemplate = (say = null ): string => {
        return say ?? "Hello TS Template!"
    }
}

if (typeof window !== 'undefined') {
    window.TSTemplate;
}

export default TSTemplate