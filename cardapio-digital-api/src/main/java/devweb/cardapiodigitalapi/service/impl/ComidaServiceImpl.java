package devweb.cardapiodigitalapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devweb.cardapiodigitalapi.dto.ComidaDTO;
import devweb.cardapiodigitalapi.model.Comida;
import devweb.cardapiodigitalapi.repository.ComidaRepository;
import devweb.cardapiodigitalapi.service.contract.ComidaService;

@Service
public class ComidaServiceImpl implements ComidaService {
	
	@Autowired
	private ComidaRepository comidaRepository;
	
	public List<ComidaDTO> findComidas(String nome) {
	
	if(nome == null) {
		return ComidaDTO.toDTO(comidaRepository.findAll());
	}
	
		return  ComidaDTO.toDTO(comidaRepository.findByNome(nome));
	}

	@Override
	public void deleteComida(Long id) {
		comidaRepository.deleteById(id);
	}

	@Override
	public void insertComida(ComidaDTO comidaDTO) {
		Comida comida = new Comida();
		comida.setDescricao(comidaDTO.getDescricao());
		comida.setImagem(comidaDTO.getImagem());
		comida.setNome(comidaDTO.getNome());
		comida.setValor(comidaDTO.getValor());
		comidaRepository.save(comida);
		
	}

    @Override
    public void alterarComida(Long id, ComidaDTO comidaDTO) {
        Comida comida = comidaRepository.getById(id);
        comida.setDescricao(comidaDTO.getDescricao());
        comida.setImagem(comidaDTO.getImagem());
        comida.setNome(comida.getNome());
        comida.setValor(comida.getValor());
        comidaRepository.save(comida);
    }

}
