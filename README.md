# NASA-Spring_API
This Spring Boot application provides an API endpoint to retrieve NASA's Astronomy Picture of the Day (APOD) using the NASA API. It allows users to fetch APOD data based on parameters such as date, start date, end date, count, and whether to include thumbnails.

# Table of Contents
1. Controllers
2. Models
3. Services
4. Main Application
5. Configuration

# Controllers

The controllers package contains classes responsible for handling incoming HTTP requests and defining the API endpoints.

package com.nasa.SpringNasaAPI.controller;

import com.nasa.SpringNasaAPI.Service.NasaApodService;
import com.nasa.SpringNasaAPI.model.NasaApodResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NasaApodController {

    @Autowired
    private  NasaApodService nasaApodService;

    @GetMapping("/apod")
    public
    List<NasaApodResponse> getAPOD ( @RequestParam(required = false) String date,
                                     @RequestParam(required = false) String start_date,
                                     @RequestParam(required = false) String end_date,
                                     @RequestParam(required = false) Integer count,
                                     @RequestParam(required = false) Boolean thumbs ) {
        return nasaApodService.getAPOD(date, start_date, end_date, count, thumbs);
    }
}


# Models

The models package includes classes that represent the data structures used in the application, such as APOD objects.

# Services

The services package contains classes that handle the business logic of fetching APOD data from the NASA API and processing the requests.

# Main Application

The main application package includes the class with the `main` method to start the Spring Boot application.

# Configuration

The configuration package may contain classes related to configuring the Spring application, such as properties or security configurations.
