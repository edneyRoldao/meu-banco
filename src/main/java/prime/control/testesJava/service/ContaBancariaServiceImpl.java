package prime.control.testesJava.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import prime.control.testesJava.enums.TipoConta;
import prime.control.testesJava.model.ContaBancaria;
import prime.control.testesJava.repository.ContaBancariaRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContaBancariaServiceImpl implements ContaBancariaService {

    private ContaBancariaRepository contaBancariaRepository;

    @Autowired
    public ContaBancariaServiceImpl(ContaBancariaRepository contaBancariaRepository) {
        this.contaBancariaRepository = contaBancariaRepository;
    }

    @Override
    public void criarConta(ContaBancaria contaBancaria) {
        contaBancariaRepository.save(contaBancaria);
    }

    @Override
    public List<ContaBancaria> listarContas(TipoConta tipoConta) {
        List<ContaBancaria> lista = contaBancariaRepository.findAll();
        return lista.stream().filter(cb -> cb.getTipoConta() == tipoConta).collect(Collectors.toList());
    }

    @Override
    public long totalContas() {
        return contaBancariaRepository.findAll().size();
    }

    @Override
    public long totalContasConrrente() {
        List<ContaBancaria> lista = contaBancariaRepository.findAll();
        return lista.stream().filter(cb -> cb.getTipoConta() == TipoConta.CORRENTE).count();
    }

    @Override
    public long totalContasPupanca() {
        List<ContaBancaria> lista = contaBancariaRepository.findAll();
        return lista.stream().filter(cb -> cb.getTipoConta() == TipoConta.POUPANCA).count();
    }

}
