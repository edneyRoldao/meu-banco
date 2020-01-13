import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.interface';

@Component({
    selector: 'root',
    styles: [
    ],
    template: `
    <div class="container jumbotron mt-5 col-4">

        <div>
            <form novalidate>
                <div class="form-group">
                    <label for="name">Nome:</label>
                    <input type="text" 
                           class="form-control" 
                           placeholder="Informa nome do contato"
                           #nome
                           id="nome">
                </div>
                <div class="form-group">
                    <label for="pwd">Telefone:</label>
                    <input type="text" 
                           class="form-control" 
                           placeholder="Informe o telefone"
                           #telefone
                           id="telefone">
                </div>
                <button (click)="addAndClean(nome, telefone, $event)" class="btn btn-primary">Adicionar</button>
            </form>
        </div>
        <div class="mt-5">
            <ul class="list-group">
                <li *ngFor="let contato of contatos"  class="list-group-item mt-2">
                    nome: {{ contato.nome }} - telefone: {{ contato.telefone }}
                </li>
            </ul>
        </div>
    </div>
    `
})
export class AppComponent implements OnInit {

    contato: Contato;
    contatos: Contato[] = [];

    ngOnInit() {
        this.contato = {nome: '', telefone: ''};
    }

    addAndClean(n, t, e): void {
        this.contato = {nome: n.value, telefone: t.value};
        this.contatos.push(this.contato);
        n.value = '';
        t.value = '';
        e.stopPropagation();
        e.preventDefault();
    }

}
