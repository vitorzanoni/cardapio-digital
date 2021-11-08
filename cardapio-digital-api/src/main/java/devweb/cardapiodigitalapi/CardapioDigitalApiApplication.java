package devweb.cardapiodigitalapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

@SpringBootApplication
public class CardapioDigitalApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardapioDigitalApiApplication.class, args);
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("org.h2.Driver");
		dataSource.setUrl("jdbc:h2:mem:testdb");
		dataSource.setUsername("sa");
		dataSource.setPassword("password");

		Resource initSchema = new ClassPathResource("script/insert.sql");
		DatabasePopulator databasePopulator = new ResourceDatabasePopulator(initSchema);
		DatabasePopulatorUtils.execute(databasePopulator, dataSource);
	}

}
