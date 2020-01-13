package prime.control.testesJava;

import org.junit.Before;
import org.junit.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.springframework.boot.test.context.SpringBootTest;
import prime.control.testesJava.enums.TipoConta;
import prime.control.testesJava.model.ContaBancaria;
import prime.control.testesJava.repository.ContaBancariaRepository;
import prime.control.testesJava.service.ContaBancariaService;
import prime.control.testesJava.service.ContaBancariaServiceImpl;

import java.util.Arrays;

@SpringBootTest
public class ContaBancariaTest {

    private ContaBancariaRepository repository;

    @Before
    public void mockBuilder() {
        repository = mock(ContaBancariaRepository.class);
    }

    @Test
    public void deveRetornarTotalContasCorrente() {

        ContaBancaria cb1 = ContaBancaria.builder().nome("joao").tipoConta(TipoConta.CORRENTE).build();
        ContaBancaria cb2 = ContaBancaria.builder().nome("joao").tipoConta(TipoConta.CORRENTE).build();
        ContaBancaria cb3 = ContaBancaria.builder().nome("joao").tipoConta(TipoConta.INVESTIMENTO).build();
        ContaBancaria cb4 = ContaBancaria.builder().nome("joao").tipoConta(TipoConta.CORRENTE).build();
        ContaBancaria cb5 = ContaBancaria.builder().nome("joao").tipoConta(TipoConta.POUPANCA).build();
        ContaBancaria cb6 = ContaBancaria.builder().nome("joao").tipoConta(TipoConta.INVESTIMENTO).build();

        when(repository.findAll()).thenReturn(Arrays.asList(cb1, cb2, cb3, cb4, cb5, cb6));
        ContaBancariaService cbs = new ContaBancariaServiceImpl(repository);
    }

}
