package prime.control.testesJava.service;

import prime.control.testesJava.model.ContaBancaria;

public interface MovimentacaoService {

    void depositar(Float valorDeposito, ContaBancaria contaBancariaFavorecido);

    boolean sacar(Float valorSaque, ContaBancaria contaBancaria);

    boolean transferir(ContaBancaria contaBancariaOrigem, ContaBancaria contaBancariaDestino);

}
