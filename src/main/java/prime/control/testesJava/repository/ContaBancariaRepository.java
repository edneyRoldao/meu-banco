package prime.control.testesJava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import prime.control.testesJava.model.ContaBancaria;

@Repository
public interface ContaBancariaRepository extends JpaRepository<ContaBancaria, Long> {
}
