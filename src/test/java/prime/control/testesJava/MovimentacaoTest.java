package prime.control.testesJava;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import prime.control.testesJava.model.ContaBancaria;
import prime.control.testesJava.service.MovimentacaoServiceImpl;

@SpringBootTest
public class MovimentacaoTest {

    @Before
    public void testDataBuilder() {

    }

    @Test
    public void deveRealizarDeposito() {
        MovimentacaoServiceImpl movimentacao = new MovimentacaoServiceImpl();
        ContaBancaria conta = ContaBancaria.builder().nome("Joao").saldo(100.00F).build();

        movimentacao.depositar(50.0F, conta);

        float saldoFinalEsperado = 150.00F;

//        Assert.assertEquals(saldoFinalEsperado, conta.getSaldo(), 0.00001);
    }

    @Test
    public void deveRealizarSaque() {

    }

    @Test
    public void naoDeveRealizarSaque() {

    }

    @Test
    public void deveRealizarTransferencia() {

    }

    @Test
    public void naoDeveRealizarTransferencia() {

    }

//    @Test(expected = RuntimeException.class)
//    public void naoDeveRealizarProximaOperacaoAntesUmMinuto() {
//
//    }

    @Test
    public void realizarOperacaoAposUmMinuto() {

    }

}
