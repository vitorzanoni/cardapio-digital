package devweb.cardapiodigitalapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devweb.cardapiodigitalapi.dto.ComidaDTO;
import devweb.cardapiodigitalapi.repository.ComidaRepository;
import devweb.cardapiodigitalapi.service.contract.ComidaService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ComidaServiceImpl implements ComidaService {
	
	@Autowired
	private ComidaRepository comidaRepository;
	
	public List<ComidaDTO> findComidas(String nome) {
	
	if(nome == null) {
		return ComidaDTO.toDTO(comidaRepository.findAll());
	}
	
		return  ComidaDTO.toDTO(comidaRepository.findByNome(nome));
	}

}
