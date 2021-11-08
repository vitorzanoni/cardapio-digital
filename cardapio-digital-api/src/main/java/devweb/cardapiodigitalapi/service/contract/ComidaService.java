package devweb.cardapiodigitalapi.service.contract;

import java.util.List;

import devweb.cardapiodigitalapi.dto.ComidaDTO;

public interface ComidaService {

	List<ComidaDTO> findComidas(String nome);

}
