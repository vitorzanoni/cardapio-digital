package devweb.cardapiodigitalapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import devweb.cardapiodigitalapi.dto.ComidaDTO;
import devweb.cardapiodigitalapi.service.contract.ComidaService;

@RestController
@RequestMapping("/comidas")
public class ComidaController {

	@Autowired
	private ComidaService comidaService;

	@GetMapping
	public List<ComidaDTO> findComidas(String nome) {
		return comidaService.findComidas(nome);
	}
}
