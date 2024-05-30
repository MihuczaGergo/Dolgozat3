/*
* File: app.ts
* Author: Mihucza Gergő
* Copyright: 2024, Mihucza Gergő
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/MihuczaGergo/
* Licenc: GNU GPL
*/


class Teglalap{
    aoldalInput?: HTMLInputElement | null;
    boldalInput?: HTMLInputElement | null;
    atlo?: HTMLInputElement | null;
    calcButton?: HTMLInputElement | null;

    constructor () {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml(){
        this.aoldalInput = document.querySelector('#aoldal');
        this.boldalInput = document.querySelector('#boldal');
        this.atlo = document.querySelector('#atlo');
        this.calcButton = document.querySelector('#calcButton');
    }

    handleEvent(){
        this.calcButton?.addEventListener('click',() =>{
            this.startCalc();
        })
    }

    startCalc(){
        const aoldal = Number(this.aoldalInput?.value);
        const boldal = Number(this.boldalInput?.value);
        const atlo = this.calcAtlo(aoldal,boldal);
        this.renderResults(atlo);


    }
    calcAtlo(aoldal: number, boldal: number):number {
        return Math.sqrt(Math.pow(aoldal,2)+Math.pow(boldal,2));
    }
    renderResults(atlo: number):void{
        this.atlo!.value = String(atlo);
    }

}

new Teglalap();