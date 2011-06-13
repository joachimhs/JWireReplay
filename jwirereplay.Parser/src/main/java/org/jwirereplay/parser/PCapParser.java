package org.jwirereplay.parser;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

import org.jwirereplay.parser.exception.PcapParseException;
import org.jwirereplay.parser.util.HeaderParseUtil;

public class PCapParser {
	private PcapGlobalHeader pcapGlobalHeader;
	private FileInputStream fis;
	
	public void openFile(String filename) throws PcapParseException {
		try {
			this.fis = new FileInputStream(new File(filename));
			readGlobalHeader();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new PcapParseException("Unable to open input stream to file (Not Found): " + filename, e);
		}	
	}
	
	public void closeFile() {
		try {
			fis.close();
		} catch (Exception e) {
			// do nothing
		}
	}
	
	private int readBytes(byte[] data) {
		int offset = 0;
		int read = -1;
		while (offset != data.length) {
			try {
				read = this.fis.read(data, offset, data.length - offset);
			} catch (Exception e) {
				break;
			}
			if (read == -1)
				break;

			offset = offset + read;
		}
		if (read != data.length)
			return -1;
		else
			return 0;
	}
	
	public Packet getNextPacket() {
		byte[] packetHeaderArray = new byte[HeaderParseUtil.pcapPacketHeaderSize];
		if (this.readBytes(packetHeaderArray) == -1) {
			return Packet.EOF;
		}
		Packet packet = new Packet(packetHeaderArray);
		
		byte[] pcapPacketContentsArray = new byte[(int)packet.getInclLen()];
		if (this.readBytes(pcapPacketContentsArray) == -1) {
			return packet.EOF;
		}
		
		//Verify that the pcap contents is indeed a TCP/IP packet.
		if (HeaderParseUtil.isTCPPacket(pcapPacketContentsArray)) {
			packet = new TCPPacket(packetHeaderArray, pcapPacketContentsArray);
		}
		
		return packet;
	}
	
	private void readGlobalHeader() throws PcapParseException {
		byte[] globalHeader = new byte[HeaderParseUtil.pcapGlobalHeaderSize];
		
		if (this.readBytes(globalHeader) == -1) {
			throw new PcapParseException("Unable to read global header from PCAP file.");
		}
		
		pcapGlobalHeader = new PcapGlobalHeader(globalHeader);
	}
	
	public PcapGlobalHeader getPcapGlobalHeader() {
		return pcapGlobalHeader;
	}
}
