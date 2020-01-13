package prime.control.testesJava.model;

import lombok.*;
import prime.control.testesJava.enums.TipoConta;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "conta_bancaria")
public class ContaBancaria {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "conta_seq")
    @SequenceGenerator(name = "conta_seq", sequenceName = "conta_id_seq", allocationSize = 1)
    private Long id;

    private String nome;

    private Float saldo;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dataUltimaOperacao;

    @Enumerated(value = EnumType.STRING)
    private TipoConta tipoConta;

}
