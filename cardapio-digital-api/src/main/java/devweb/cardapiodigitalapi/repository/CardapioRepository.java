package devweb.cardapiodigitalapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import devweb.cardapiodigitalapi.model.Cardapio;

public interface CardapioRepository extends JpaRepository<Cardapio, Long> {

    List<Cardapio> findByNome(String nome);
    List<Cardapio> findByTipo(String tipo);

}
