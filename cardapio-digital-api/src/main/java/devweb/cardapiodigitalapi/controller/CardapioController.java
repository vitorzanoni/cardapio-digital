package devweb.cardapiodigitalapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import devweb.cardapiodigitalapi.dto.ItemDTO;
import devweb.cardapiodigitalapi.service.contract.CardapioService;

@RestController
@RequestMapping("/cardapio")
public class CardapioController {

    @Autowired
    private CardapioService cardapioService;

    @PostMapping
    public void insertItem(@RequestBody ItemDTO itemDTO) {
        cardapioService.insertItem(itemDTO);
    }

    @DeleteMapping("{id}")
    public void deleteItem(@PathVariable(required = true) Long id) {
        cardapioService.deleteItem(id);
    }

    @GetMapping
    public List<ItemDTO> findItens(String nome, String tipo) {
        return cardapioService.findItens(nome, tipo);
    }

    @PutMapping("{id}")
    public void alterarItem(@PathVariable(required = true) Long id, @RequestBody ItemDTO itemDTO) {
        cardapioService.alterarItem(id, itemDTO);
    }

}
