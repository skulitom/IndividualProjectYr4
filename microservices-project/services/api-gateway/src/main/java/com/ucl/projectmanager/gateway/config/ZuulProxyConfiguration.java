package com.ucl.projectmanager.gateway.config;

import com.ucl.projectmanager.gateway.filter.RewriteFilter;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableZuulProxy
public class ZuulProxyConfiguration {

    @Bean
    public RewriteFilter locationRewriteFilter() {
        return new RewriteFilter();
    }

    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration cors = new CorsConfiguration();
        cors.setAllowCredentials(true);
        cors.addAllowedOrigin("*");
        cors.addAllowedHeader("*");
        cors.addAllowedMethod("POST");
        cors.addAllowedMethod("DELETE");
        cors.addAllowedMethod("HEAD");
        cors.addAllowedMethod("GET");
        cors.addAllowedMethod("PUT");
        cors.addAllowedMethod("PATCH");
        source.registerCorsConfiguration("/**", cors);
        return new CorsFilter(source);
    }
}
