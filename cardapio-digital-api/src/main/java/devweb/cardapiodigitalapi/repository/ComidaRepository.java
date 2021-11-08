package devweb.cardapiodigitalapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import devweb.cardapiodigitalapi.model.Comida;

public interface ComidaRepository extends JpaRepository<Comida, Integer> {

	List<Comida> findByNome(String nome);

}
