package prime.control.testesJava.service;

import org.springframework.stereotype.Service;
import prime.control.testesJava.model.ContaBancaria;

@Service
public class MovimentacaoServiceImpl implements MovimentacaoService {

    @Override
    public void depositar(Float valorDeposito, ContaBancaria contaBancariaFavorecido) {
    }

    @Override
    public boolean sacar(Float valorSaque, ContaBancaria contaBancaria) {
        return false;
    }

    @Override
    public boolean transferir(ContaBancaria contaBancariaOrigem, ContaBancaria contaBancariaDestino) {
        return false;
    }

}
