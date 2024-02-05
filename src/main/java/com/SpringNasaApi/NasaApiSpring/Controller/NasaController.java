package com.SpringNasaApi.NasaApiSpring.Controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.SpringNasaApi.NasaApiSpring.Model.APODResponse;

@RestController
public class NasaController {

	
	private static final String URL = "https://api.nasa.gov/planetary/apod";

	
	private static final String apiKey="2njMIPniDKmUAXhBNKi98RBPmeZrKrOptV8goK0a";



	@GetMapping("/apodapi")
	public List<APODResponse> getAPOD(@RequestParam(required = false) String date,
			@RequestParam(required = false) String start_date, @RequestParam(required = false) String end_date,
			@RequestParam(required = false) Integer count, @RequestParam(required = false) Boolean thumbs) {

		RestTemplate restTemplate = new RestTemplate();
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(URL).queryParam("api_key", apiKey)
				.queryParam("date", date).queryParam("start_date", start_date).queryParam("end_date", end_date)
				.queryParam("count", count).queryParam("thumbs", thumbs);

		String url = uriBuilder.toUriString();

		
		try {
			ResponseEntity<List<APODResponse>> nasaresponseEntity = restTemplate.exchange(url, HttpMethod.GET, null,
					new ParameterizedTypeReference<List<APODResponse>>() {
					});
			return nasaresponseEntity.getBody();

		} catch (Exception e) { // Fallback for single object response try {
			APODResponse singleResponse = restTemplate.getForObject(url, APODResponse.class);
			return Collections.singletonList(singleResponse);
		}
	}

}
