package devweb.cardapiodigitalapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import devweb.cardapiodigitalapi.model.Cardapio;
import devweb.cardapiodigitalapi.repository.custom.CardapioRepositoryCustom;

public interface CardapioRepository extends CardapioRepositoryCustom, JpaRepository<Cardapio, Long> {

    List<Cardapio> findByNome(String nome);
    List<Cardapio> findByTipo(String tipo);

}
