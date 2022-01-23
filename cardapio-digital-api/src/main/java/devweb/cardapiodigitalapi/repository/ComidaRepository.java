package devweb.cardapiodigitalapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import devweb.cardapiodigitalapi.model.Comida;

public interface ComidaRepository extends JpaRepository<Comida, Long> {

	List<Comida> findByNome(String nome);

}
