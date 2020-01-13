package prime.control.testesJava.service;

import prime.control.testesJava.enums.TipoConta;
import prime.control.testesJava.model.ContaBancaria;

import java.util.List;

public interface ContaBancariaService {

    void criarConta(ContaBancaria contaBancaria);

    List<ContaBancaria> listarContas(TipoConta tipoConta);

    long totalContas();

    long totalContasConrrente();

    long totalContasPupanca();

}
